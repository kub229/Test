
npm run dev --> zapinanie projektu
npm install @mui/material @emotion/react @emotion/styled --> install mui libarry (html a css)
git init --> inicializacia gitu
git branch -m <name> --> zmeni meno git main brainchu
git config --global user.name "your name“ --> nastavime user name
git config --global user.email "your email" --> nastavime user email
git remote add origin https://github.com/your_username/project_name.git --> nastavite svoj projekt
git add . --> vlozite vsetky files z filu, ktory ste nastavili
git commit -m "Initial commit" --> commit changes

npx create-next-app@latest --> i nstall command ls --> terminal – show root, vypis directiories cd --> change directory cd .. --> posunie nas o uroven vyzsie npm run dev --> zapinanie projektu npm install @mui/material @emotion/react @emotion/styled --> install mui libarry (html a css) git init --> inicializacia gitu git branch -m --> zmeni meno git main brainchu git config --global user.name "your name“ --> nastavime user name git config --global user.email "your email" --> nastavime user email git remote add origin https://github.com/your_username/project_name.git --> nastavite svoj projekt git add . --> vlozite vsetky files z filu, ktory ste nastavili git commit -m "Initial commit" --> commit changes

Node js vzdy zobrazuje stranku, ktora sa musi volat page.tsx a musi byt v app priecinku. Ako home stranku zobrazu tu, ktora je len v app priecinku a nie je zabalena nejakym inym priecinkom. Preto na home priecinok dame () --> (home) lebo router home priecinok „nevidi“ ak je v zatvrokach a page vnom zonbere ako default.
Next.js rezervovane nazvy --> layout.tsx, not-found.tsx, page.tsx

-routing --> npm run build --> skompiluje a vytvori production server na localhoste, vzdy zapnut pred commit/sync aby sa errors nedostali na production server

vypise vsetky folders a files okrem .next, node_modules, .git --> ind . -path './.next' -prune -o -path './node_modules' -prune -o -path './.git' -prune -o -print | sed -e "s/[^\/]*// |/g" -e "s/|([^ ])/|-\1/"



Prejdi do Google Developer Console

Vytvor nový projekt alebo vyber existujúci projekt

V sekcii APIs & Services klikni na Credentials (Prihlásenie)

V sekcii OAuth 2.0 Client IDs klikni na Create Credentials (Vytvoriť prihlasovacie údaje)

Vyber možnosť OAuth client ID (OAuth klient ID)

Nastav typ aplikácie na Web Application (Webová aplikácia)

Pridaj nasledujúcu redirect URI (adresu pre presmerovanie):

    http://localhost:3000/api/auth/callback/google



Set up .env

    GOOGLE_CLIENT_ID=your-google-client-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret
    NEXTAUTH_URL=http://localhost:3000  #alebo production URL

V0 - vercel AI

Material UI - library