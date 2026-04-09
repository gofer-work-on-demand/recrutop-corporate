export function MentionsLegales() {
  return (
    <div className="border-b border-black/5 bg-bg-light">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Cadre légal</p>
        <h1 className="mt-4 font-heading text-4xl font-bold text-dark sm:text-5xl">Mentions légales</h1>

        <div className="mt-8 grid gap-6">
          <section className="rounded-card border border-black/10 bg-white p-6 shadow-card">
            <h2 className="font-heading text-2xl font-bold text-dark">Éditeur du site</h2>
            <ul className="mt-4 space-y-2 text-text">
              <li><strong>RECRUTOP</strong></li>
              <li>Société à responsabilité limitée (SARL)</li>
              <li>Siège social : 141 avenue de Clichy, 75017 Paris, France</li>
              <li>SIREN : 502 730 971</li>
              <li>SIRET : 502 730 971 00038</li>
              <li>Code APE / NAF : 7820Z - Activités des agences de travail temporaire</li>
              <li>Capital social : 64 500,00 EUR</li>
              <li>Numéro RCS : Paris B 502 730 971</li>
              <li>TVA intracommunautaire : FR65502730971</li>
              <li>Tribunal de commerce compétent : Greffe de Paris</li>
            </ul>
          </section>

          <section className="rounded-card border border-black/10 bg-white p-6 shadow-card">
            <h2 className="font-heading text-2xl font-bold text-dark">Responsable de la publication</h2>
            <ul className="mt-4 space-y-2 text-text">
              <li>Richard GRIVAUD</li>
              <li>Téléphone : 01 40 24 20 40</li>
              <li>Email : rgrivaud@recrutop.fr</li>
            </ul>
          </section>

          <section className="rounded-card border border-black/10 bg-white p-6 shadow-card">
            <h2 className="font-heading text-2xl font-bold text-dark">Hébergement du site</h2>
            <ul className="mt-4 space-y-2 text-text">
              <li><strong>Hébergeur :</strong> Strikingly, Inc.</li>
              <li>1355 Market Street, Suite 488</li>
              <li>San Francisco, CA 94103, États-Unis</li>
              <li>Email : support@strikingly.com</li>
            </ul>
          </section>

          <section className="rounded-card border border-black/10 bg-white p-6 shadow-card">
            <h2 className="font-heading text-2xl font-bold text-dark">Protection des données personnelles</h2>

            <h3 className="mt-6 font-heading text-lg font-semibold text-dark">
              Données collectées dans le cadre des candidatures
            </h3>
            <p className="mt-2 text-text">
              Conformément au Code du travail et au RGPD, la procédure de recrutement peut
              comprendre la qualification de CV, des tests éventuels et des entretiens (physiques
              ou à distance).
            </p>
            <p className="mt-3 text-text">
              Les résultats des tests peuvent être communiqués sur simple demande et sont conservés
              dans le dossier du candidat en cas d&apos;embauche.
            </p>
            <p className="mt-3 text-text">
              Les données collectées sont traitées de manière confidentielle et uniquement dans le
              cadre de la gestion des candidatures.
            </p>

            <h3 className="mt-6 font-heading text-lg font-semibold text-dark">Durée de conservation</h3>
            <p className="mt-2 text-text">
              Les données sont conservées pendant une durée maximale de 24 mois après le dernier
              contact, sauf obligation légale ou motif légitime de conservation plus longue.
            </p>

            <h3 className="mt-6 font-heading text-lg font-semibold text-dark">Destinataires des données</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-text">
              <li>Les recruteurs habilités de RECRUTOP.</li>
              <li>Les clients de RECRUTOP dans le cadre exclusif du processus de recrutement.</li>
            </ul>

            <h3 className="mt-6 font-heading text-lg font-semibold text-dark">Droits des personnes concernées</h3>
            <p className="mt-2 text-text">
              Conformément aux articles 15 à 22 du RGPD, vous disposez des droits d&apos;accès, de
              rectification, d&apos;effacement, de limitation, d&apos;opposition, de portabilité, et du
              droit de définir des directives post-mortem.
            </p>
            <p className="mt-3 text-text">
              Pour exercer vos droits : <strong>Délégué à la Protection des Données (DPO)</strong> - Email :
              {" "}contact@recrutop.fr
            </p>

            <h3 className="mt-6 font-heading text-lg font-semibold text-dark">Transmission des données</h3>
            <p className="mt-2 text-text">
              En utilisant ce site et en y déposant des informations, vous autorisez RECRUTOP à
              transmettre vos données aux entreprises clientes exclusivement dans le cadre de votre
              candidature.
            </p>

            <h3 className="mt-6 font-heading text-lg font-semibold text-dark">Historique CNIL</h3>
            <p className="mt-2 text-text">
              Avant l&apos;entrée en vigueur du RGPD (2018), certains traitements ont fait l&apos;objet de
              déclarations auprès de la CNIL sous les numéros suivants :
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-text">
              <li>2045967</li>
              <li>2046122</li>
              <li>2046175</li>
              <li>2046804</li>
              <li>2046933</li>
            </ul>
            <p className="mt-3 text-text">Ces déclarations sont maintenues à titre informatif.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MentionsLegales;

