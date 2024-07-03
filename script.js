document.addEventListener("DOMContentLoaded", function() {
    const steps = document.querySelectorAll('.step'); // Seleciona todos os elementos com a classe 'step'
    const Continue = document.getElementById('continue'); // Seleciona o botão "Continuar"
    const back = document.getElementById('back'); // Seleciona o botão "Voltar"
    const dots = document.querySelectorAll('.dot'); // Seleciona todos os elementos com a classe 'dot'
    let currentStep = 0; // Variável para rastrear o passo atual

    // Mostrar o primeiro passo inicialmente
    steps[currentStep].classList.add('visible'); // Adiciona a classe 'visible' ao primeiro passo
    dots[currentStep].classList.add('active'); // Adiciona a classe 'active' à primeira bolinha

    Continue.addEventListener('click', function() {
        if (currentStep < steps.length - 1) { // Verifica se não estamos no último passo
            steps[currentStep].classList.remove('visible'); // Remove a classe 'visible' do passo atual
            steps[currentStep].classList.add('hidden'); // Adiciona a classe 'hidden' ao passo atual
            dots[currentStep].classList.remove('active'); // Remove a classe 'active' da bolinha atual
            currentStep++; // Incrementa a variável do passo atual
            steps[currentStep].classList.remove('hidden'); // Remove a classe 'hidden' do próximo passo
            steps[currentStep].classList.add('visible'); // Adiciona a classe 'visible' ao próximo passo
            dots[currentStep].classList.add('active'); // Adiciona a classe 'active' à bolinha do próximo passo
        }
    });

    back.addEventListener('click', function() {
        if (currentStep > 0) { // Verifica se não estamos no primeiro passo
            steps[currentStep].classList.remove('visible'); // Remove a classe 'visible' do passo atual
            steps[currentStep].classList.add('hidden'); // Adiciona a classe 'hidden' ao passo atual
            dots[currentStep].classList.remove('active'); // Remove a classe 'active' da bolinha atual
            currentStep--; // Decrementa a variável do passo atual
            steps[currentStep].classList.remove('hidden'); // Remove a classe 'hidden' do passo anterior
            steps[currentStep].classList.add('visible'); // Adiciona a classe 'visible' ao passo anterior
            dots[currentStep].classList.add('active'); // Adiciona a classe 'active' à bolinha do passo anterior
        }
    });
});
