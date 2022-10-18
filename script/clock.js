
// class Clock {
//     constructor() {
//         this.minutes = document.querySelector('p:nth-child(1)')
//         this.seconds = document.querySelector('p:nth-child(3)')
//         this.start = document.querySelector('.start')
//         this.pause = document.querySelector('.pause')
//         this.reset = document.querySelector('.reset')
//
//
//         this.sec = 0
//         this.min = 0
//         this.go = false
//         this.playTime = false
//
//
//     }
//
//    startTime() {
//         this.start = document.querySelector('.start')
//         this.start.addEventListener('click', () => {
//             this.start.innerHTML = 'STOP'
//             this.start.classList.remove('start')
//             this.start.classList.add('stop')
//             if (this.playTime === false) {
//                 this.playTime = true
//                 this.go = setInterval(() => {
//                     this.sec +=1
//                     if (this.sec < 10) {
//                         this.seconds.innerHTML = '0' + this.sec
//                     } else {
//                         this.seconds.innerHTML = this.sec
//                     }
//
//                     if (this.sec === 60) {
//                        this.min +=1
//                         this.sec = 0
//                         if (this.min < 10) {
//                             this.minutes.innerHTML = '0' + this.min
//                         } else {
//                             this.minutes.innerHTML = this.min
//                         }
//                     }
//                 },100)
//             }
//
//             this.pouseTime()
//             this.pouseReset()
//             this.stopTime()
//         })
//
//
//
//    }
//
//     pouseTime() {
//         this.pause.addEventListener('click',() => {
//             clearInterval(this.go)
//             this.playTime = false
//             this.startTime()
//
//
//         })
//     }
//
//     pouseReset() {
//         this.reset.addEventListener('click', () => {
//             this.sec = 0
//            this.minutes.innerHTML = '00'
//
//         })
//
//     }
//
//     stopTime() {
//         let st = document.querySelector('.stop')
//         st.addEventListener('click', () => {
//             clearInterval(this.go)
//             this.sec = 0
//             this.min = 0
//             this.playTime = false
//             this.minutes.innerHTML = '00'
//             this.seconds.innerHTML = '00'
//             this.start.classList.remove('stop')
//             this.start.classList.add('start')
//             this.start.innerHTML = 'start'
//             this.startTime()
//
//         })
//     }
//
//
// }
//
//
// export default Clock





























