# Configuration EmailJS

Pour que le formulaire de contact envoie directement des emails, vous devez configurer EmailJS :

## Étapes de configuration :

1. **Créer un compte EmailJS** (gratuit) : https://www.emailjs.com/

2. **Créer un service email** :
   - Allez dans "Email Services"
   - Ajoutez un service (Gmail, Outlook, etc.)
   - Connectez votre compte email

3. **Créer un template d'email** :
   - Allez dans "Email Templates"
   - Créez un nouveau template avec les variables suivantes :
     - `{{to_email}}` : abarah@recrutop.fr
     - `{{subject}}` : Le domaine choisi
     - `{{from_name}}` : Nom et prénom
     - `{{from_email}}` : Email du contact
     - `{{telephone}}` : Téléphone
     - `{{societe}}` : Société
     - `{{type}}` : Candidat ou Client
     - `{{domaine}}` : Domaine choisi
     - `{{message}}` : Message

4. **Récupérer vos identifiants** :
   - Service ID : Dans "Email Services"
   - Template ID : Dans "Email Templates"
   - Public Key : Dans "Account" > "General"

5. **Mettre à jour le code** :
   - Ouvrez `src/components/CallToActionDual.tsx`
   - Remplacez les valeurs :
     - `YOUR_SERVICE_ID` par votre Service ID
     - `YOUR_TEMPLATE_ID` par votre Template ID
     - `YOUR_PUBLIC_KEY` par votre Public Key

## Installation du package :

```bash
npm install @emailjs/browser
```

## Exemple de template EmailJS :

**Subject:** `{{subject}}`

**Body:**
```
Nouvelle demande de contact

Nom et prénom: {{from_name}}
Email: {{from_email}}
Téléphone: {{telephone}}
Société: {{societe}}
Type: {{type}}
Domaine choisi: {{domaine}}

Message:
{{message}}
```

