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

}

export default new QuizService();
