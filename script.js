   const botoes = document.querySelectorAll("button");

        botoes.forEach(function(botao) {
            let curtiu = false; 

            botao.addEventListener("click", function() {
                let texto = botao.querySelector("span");
                let valorAtual = parseInt(texto.textContent);

                if (!curtiu) {   
                    texto.textContent = valorAtual + 1;
                    curtiu = true;
                } else {
                    texto.textContent = valorAtual - 1;
                    curtiu = false;
                }
            });
        });
