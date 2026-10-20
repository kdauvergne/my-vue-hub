<template>
  <article class="max-w-3xl mx-auto py-8 space-y-8">
    <header class="space-y-2">
      <h1 class="text-3xl font-bold">Mentions légales</h1>
      <p class="text-sm opacity-80">
        Dernière mise à jour :
        <time datetime="2026-10-20">20 octobre 2026</time>
      </p>
    </header>

    <p>
      Conformément à l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la
      confiance dans l'économie numérique (LCEN), les informations suivantes
      sont portées à la connaissance des utilisateurs du site my-vue-hub.
    </p>

    <section aria-labelledby="editeur" class="space-y-2">
      <h2 id="editeur" class="text-xl font-semibold">Éditeur du site</h2>
      <p>
        Le site my-vue-hub est un site personnel et non commercial, édité par
        une personne physique à titre non professionnel.
      </p>
      <address class="not-italic">
        Key-Sône Dauvergne<br />
        [Adresse postale]<br />
        Courriel :
        <a href="mailto:[adresse@exemple.fr]" class="link link-primary"
          >[adresse@exemple.fr]</a
        >
      </address>
      <p>Directeur de la publication : Key-Sône Dauvergne.</p>
    </section>

    <section aria-labelledby="hebergeur" class="space-y-2">
      <h2 id="hebergeur" class="text-xl font-semibold">Hébergement</h2>
      <address class="not-italic">
        [Nom de l'hébergeur]<br />
        [Adresse postale de l'hébergeur]<br />
        Site web :
        <a href="[https://hebergeur.exemple]" class="link link-primary"
          >[https://hebergeur.exemple]</a
        >
      </address>
    </section>

    <section aria-labelledby="objet" class="space-y-2">
      <h2 id="objet" class="text-xl font-semibold">Objet du site</h2>
      <p>
        my-vue-hub regroupe des leçons, exercices et travaux pratiques sur
        Vue.js réalisés dans le cadre d'une formation de Concepteur Développeur
        d'Applications (CDA). Les contenus sont proposés à titre pédagogique et
        peuvent comporter des erreurs ou imprécisions.
      </p>
    </section>

    <section aria-labelledby="propriete" class="space-y-2">
      <h2 id="propriete" class="text-xl font-semibold">
        Propriété intellectuelle
      </h2>
      <p>
        Sauf mention contraire, les textes et le code présentés sur ce site sont
        la propriété de leur auteur. Toute reproduction ou réutilisation, totale
        ou partielle, à des fins autres que personnelles ou pédagogiques
        nécessite son accord préalable. Les marques et logos cités, notamment
        Vue.js, appartiennent à leurs titulaires respectifs.
      </p>
    </section>

    <section aria-labelledby="responsabilite" class="space-y-2">
      <h2 id="responsabilite" class="text-xl font-semibold">Responsabilité</h2>
      <p>
        L'éditeur s'efforce de fournir des informations exactes mais ne saurait
        garantir leur exhaustivité ni être tenu responsable de leur utilisation.
        Les liens vers des sites tiers sont fournis à titre informatif ;
        l'éditeur n'exerce aucun contrôle sur leur contenu.
      </p>
    </section>

    <section aria-labelledby="donnees" class="space-y-2">
      <h2 id="donnees" class="text-xl font-semibold">Données personnelles</h2>
      <p>
        Le traitement des données collectées via le formulaire de contact est
        décrit dans la
        <RouterLink to="/privacy" class="link link-primary"
          >politique de confidentialité</RouterLink
        >.
      </p>
    </section>

    <section aria-labelledby="droit" class="space-y-2">
      <h2 id="droit" class="text-xl font-semibold">Droit applicable</h2>
      <p>Les présentes mentions légales sont régies par le droit français.</p>
    </section>
  </article>
</template>
