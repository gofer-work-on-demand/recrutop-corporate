# Instructions pour configurer le template EmailJS

## Option 1 : Template HTML stylé (recommandé)

1. Allez dans EmailJS > Email Templates > Créer un nouveau template
2. Dans l'onglet "Content", sélectionnez "Rich Text" ou "Code"
3. Copiez-collez le contenu du fichier `EMAILJS_TEMPLATE.html`
4. Dans l'onglet "Settings" :
   - **To Email** : `abarah@recrutop.fr`
   - **From Name** : `Formulaire Recrutop`
   - **Subject** : `{{subject}}`
5. Sauvegardez le template

## Option 2 : Template texte simple

1. Allez dans EmailJS > Email Templates > Créer un nouveau template
2. Dans l'onglet "Content", sélectionnez "Plain Text"
3. Copiez-collez le contenu du fichier `EMAILJS_TEMPLATE_SIMPLE.txt`
4. Dans l'onglet "Settings" :
   - **To Email** : `abarah@recrutop.fr`
   - **From Name** : `Formulaire Recrutop`
   - **Subject** : `{{subject}}`
5. Sauvegardez le template

## Variables utilisées dans le template

- `{{subject}}` : Le domaine choisi (ex: "Construction & Patrimoine")
- `{{from_name}}` : Nom et prénom du contact
- `{{from_email}}` : Email du contact
- `{{telephone}}` : Téléphone du contact
- `{{societe}}` : Société (ou "Non renseignée")
- `{{type}}` : "candidat" ou "client"
- `{{domaine}}` : Le domaine choisi
- `{{message}}` : Le message du contact
- `{{date}}` : Date d'envoi (optionnel)

## Configuration dans EmailJS

### Settings du template :
- **To Email** : `abarah@recrutop.fr`
- **From Name** : `Formulaire Recrutop` (ou `{{from_name}}` si vous voulez afficher le nom)
- **Subject** : `{{subject}}`
- **Reply To** : `{{from_email}}` (pour pouvoir répondre directement)

### Test du template

Après avoir configuré le template, vous pouvez le tester avec des valeurs d'exemple :
- `{{from_name}}` = "Jean Dupont"
- `{{from_email}}` = "jean.dupont@example.com"
- `{{telephone}}` = "01 23 45 67 89"
- `{{societe}}` = "Entreprise XYZ"
- `{{type}}` = "client"
- `{{domaine}}` = "Construction & Patrimoine"
- `{{message}}` = "Bonjour, je souhaite..."

