## Postit

### Demo Site

Check out the live demo of the project at [Demo Site URL](https://prisma-nextaut-postit.vercel.app/).

### Used Stack

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-1B222D?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![NextAuth](https://img.shields.io/badge/NextAuth-1F2937?style=for-the-badge&logo=next.js&logoColor=white)](https://next-auth.js.org/)
[![TanStack React Query](https://img.shields.io/badge/TanStack%20React%20Query-FF4154?style=for-the-badge&logo=react&logoColor=white)](https://react-query.tanstack.com/)

### Scripts

- `dev`: Run development server
- `build`: Build the project
- `start`: Start the production server

### Environment Variables

Make sure to set the following environment variables:

- `.env` file:

  - `DATABASE_URL`: PostgreSql Database URL

- `.env.local` file:
  - `GOOGLE_CLIENT_ID`: Google Client ID
  - `GOOGLE_CLIENT_SECRET`: Google Client Secret
  - `AUTH_SECRET`: Authentication Secret

## Getting Started

Follow the steps below to get the project up and running on your local machine.

### Prerequisites

- Node.js (version X.X.X)
- npm (version X.X.X)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/NecipAkgz/prisma-nextaut-postit
   ```

2. Install dependencies:

   ```bash
   cd project-name
   npm install
   ```

### Configuration

1. Set up the required environment variables as mentioned in the previous section.

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the project.

### Build

Build the project for production:

```bash
npm run build
```

### Start

Start the production server:

```bash
npm start
```
