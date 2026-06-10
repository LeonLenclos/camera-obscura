---
type: planche-billets
---

<div class="billet">

<textarea class="titre" rows="1" cols="18">
Souvenirs du futur
</textarea>

<textarea class="infos" rows="3" cols="16">
MER 20 AOUT
AURILLAC 2025
1 PLACE
</textarea>

<textarea class="heure" rows="1" cols="5">
15H30
</textarea>

<textarea class="note" rows="2" cols="42">
ARRIVER 5 MIN AVANT LE DÉBUT DE LA SÉANCE
ACCES NON GARANTI APRÈS
</textarea>

</div>


<script>
let billet = document.querySelector('.billet');
let container = document.querySelector('#main>article');
for(let i = 0 ; i < 21; i++){
  container.appendChild(billet.cloneNode(true));
}
let billets = document.querySelectorAll('.billet');
billets.forEach(b=>{
  let fields = ['titre', 'infos', 'heure', 'note'];
  fields.forEach(f=>{
    b.querySelector('.'+f).addEventListener('input', e=>{
      console.log(f + e.target.value);
      billets.forEach(b2=>{
        b2.querySelector('.'+f).value = e.target.value;
      });
    });
  });
}); 
</script>
