import { createI18n } from 'vue-i18n'

const language = {
    en: {
        message: {
            lucky: 'Lucky',
            msg1: "Every decision will change the trajectory of life, let Lucky choose you in the parallel universe! ! !",
            msg2: "In the face of faster and faster social life, in addition to work, study, and life, there are many small decisions to be made every day.",
            msg3: "Coffee or Juice?",
            msg4: "Play Games or Watch Movies?",
            msg5: "Truth or Dare?",
            msg6: "understand your little anxiety, bid farewell to the difficulty of choosing, and help you make small decisions that are okay! ! !",
        }
    },
    zh: {
        message: {
            lucky: '幸运者',
            msg1: "每一个决定都会改变人生的轨迹，让幸运者选择平行宇宙里的那个你！！！",
            msg2: "面对越来越快的社会生活，除了工作、学习、生活外，每天还要做很多小决定。",
            msg3: "火锅还是烤肉都可以",
            msg4: "果汁还是奶茶都喜欢",
            msg5: "真心话还是大冒险都难选择",
            msg6: "理解你的小焦虑，从此告别选择困难症，帮你做都可以的小决定！！！",
        }
    }
}

const i18n = createI18n({
  globalInjection: true,
  locale: 'en',
  messages: language,
  legacy: false
})
  
export default i18n