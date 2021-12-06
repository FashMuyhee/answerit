import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment'

class QuizService {

  createQuiz = async ({ quizTitle, quiz, duration, durationTime }) => {
    const user = await auth().currentUser
    try {
      await firestore()
        .collection('quizzes')
        .add({
          quizTitle,
          quiz,
          durationTime,
          duration,
          createdAt: moment.now(),
          uid: user.uid,
        })
      const message = { msg: 'Quiz Added Successfully', status: true }
      return message
    } catch (error) {
      const message = { msg: 'Something Went wrong', status: false }
      console.log(error)
      return message

    }

  }

  fetchMyQuizzes = async () => {
    const user = await auth().currentUser
    try {
      const ref = await firestore()
        .collection('quizzes').where('uid', '==', user.uid).get()

      const data = ref.docs.map((item) => {
        return {
          id: item.id,
          createdAt: item.data().createdAt,
          quizTitle: item.data().quizTitle
        }
      })

      return { status: true, data }

    } catch (error) {
      const message = { msg: 'Something Went wrong', status: false }
      console.log(error)
      return message

    }

  }

  saveUnAnswered = (array1, array2) => {
    let quiz = []
    for (let i = 0; i < array1.length; i++) {
      const ele = array1[i]
      const isExist = array2.some(item => item.quizId === ele.id)
      if (!isExist) {
        quiz.push(ele)
      }
    }
    return quiz
  }

  fetchQuizzes = async () => {
    try {
      const user = auth().currentUser

      const ref = await firestore()
        .collection('quizzes').get()

      const data = ref.docs.map((item) => {
        return {
          id: item.id,
          createdAt: item.data().createdAt,
          quizTitle: item.data().quizTitle
        }
      })
      const refScore = await firestore().collection('score_board').where('uid', '==', user.uid).get()
      const myScores = refScore.docs.map((item) => item.data())
      const exist = this.saveUnAnswered(myScores, data)

      return { status: true, data: exist }

    } catch (error) {
      const message = { msg: 'Something Went wrong', status: false }
      console.log(error)
      return message

    }

  }

  fetchQuizDetail = async (id) => {
    try {
      const ref = await firestore()
        .collection('quizzes').doc(id).get()
      const data = { ...ref.data(), id: ref.id }
      return { status: true, data }

    } catch (error) {
      const message = { msg: 'Something Went wrong', status: false }
      console.log(error)
      return message

    }

  }

  myScoreSheet = async (resolveScore) => {
    const user = auth().currentUser
    try {
      const ref = await firestore()
        .collection('score_board').where('uid', '==', user.uid).onSnapshot((item) => {
          const scores = item.docs.map((item) => {
            return item.data()
          })
          resolveScore(scores)
        })
    } catch (error) {
      const message = { msg: 'Something Went wrong', status: false }
      console.log(error)
      return message

    }

  }

  submitScore = async ({ quizId, score, quizTitle }) => {
    const user = auth().currentUser
    try {
      const ref = await firestore()
        .collection('score_board')
        .add({
          quizId,
          score,
          createdAt: moment.now(),
          uid: user.uid,
          quizTitle
        })
      const message = { msg: 'Submitted Successfully', status: true }
      return message
    } catch (error) {
      const message = { msg: 'Something Went wrong', status: false }
      console.log(error)
      return message

    }

  }


}

export default new QuizService();
