import { Prisma } from '@prisma/client'

export const members: Prisma.MemberCreateInput[] = [
  {
    name: 'Giovanne Feitosa Afonso',
    email: 'giovanneafonso@gmail.com',
    role: 'Líder de tecnologia',
    username: 'giovanne',
    linkedinUrl: 'https://www.linkedin.com/in/giovanneafonso/',
    githubUrl: 'https://github.com/giovannefeitosa',
  },
  {
    name: 'Matheus',
    email: 'matheus-todo@gmail.com',
    role: 'Desenvolvedor FullStack / Backend',
    username: 'matheus',
  },
  {
    name: 'Sebastião',
    email: 'sebastiao-todo@gmail.com',
    role: 'Desenvolvedor Backend',
    username: 'sebastiao',
  },
  {
    name: 'Anderson',
    email: 'anderson-todo@gmail.com',
    role: 'Desenvolvedor Backend',
    username: 'anderson',
  },
  {
    name: 'Fabiele',
    email: 'fabiele-todo@gmail.com',
    role: 'Product Owner',
    username: 'fabiele',
  },
  {
    name: 'John',
    email: 'john-todo@gmail.com',
    role: 'Desenvolvedor FullStack',
    username: 'john',
  }
];
