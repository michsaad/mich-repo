window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');


        let titlehover = document.querySelector('#phototitle');

        console.log(titlehover)
        phototitle.addEventListener("mouseover",respondMouseOver);
        phototitle.addEventListener("mouseout",respondMouseOut);

        function respondMouseOver(event) {

            tooltip.style.top = event.clientY + 10 + 'px' ;
            tooltip.style.left = event.clientX + 10 + 'px';

            console.log("WORK?")
            tooltip.classList.add('show');
            const tooltipPara = tooltip.querySelector('p');
            tooltipPara.innerHTML = 'πΈπππ½ββοΈππβπ½π‘π₯ππ»π€°π½πππ©π§ββοΈπ»π¦π₯³π€―πΏππΊππ­π π’πππβ€οΈππππ«π±πππ½ππ¦π€©π€ ππ₯ΈπΉ'
            console.log(event.clientX, event.ClientY);
        }
        
        function respondMouseOut() {

            tooltip.classList.remove('show')
    }
    
});

