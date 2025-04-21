document.addEventListener("DOMContentLoaded", function() {
    console.log("Site carregado com sucesso!");
});
<script>
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Impede o envio real
      alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      form.reset();
    });
  });
</script>
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    form.reset();
  });
});
