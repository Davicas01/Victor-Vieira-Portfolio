# Victor Vieira Portfolio

Portfólio pessoal desenvolvido com Next.js, TypeScript, Tailwind CSS e shadcn/ui.

## 🚀 Tecnologias

- **Next.js 14** - Framework React para produção
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes UI modernos
- **Framer Motion** - Animações
- **Lucide React** - Ícones

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/Davicas01/Victor-Vieira-Portfolio.git

# Entre no diretório
cd Victor-Vieira-Portfolio

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev
```

## 🌐 Deploy

### GitHub Pages

O deploy no GitHub Pages é automático através do GitHub Actions. A cada push na branch `main`, o site é automaticamente construído e publicado.

### Netlify

1. Conecte seu repositório GitHub ao Netlify
2. Configure as seguintes opções:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
   - **Node version:** `18`

O arquivo `netlify.toml` já está configurado com todas as otimizações necessárias.

## 📁 Estrutura do Projeto

```
├── app/                 # App Router do Next.js
├── components/          # Componentes React
│   └── ui/             # Componentes shadcn/ui
├── hooks/              # Custom hooks
├── lib/                # Utilitários
├── public/             # Arquivos estáticos
├── styles/             # Estilos globais
└── .github/workflows/  # GitHub Actions
```

## 🛠️ Scripts Disponíveis

- `npm run dev` - Executa em modo de desenvolvimento
- `npm run build` - Constrói a aplicação para produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter
- `npm run export` - Gera build estático
- `npm run deploy` - Build para deploy

## 📄 Licença

Este projeto está sob a licença MIT.

---

**Desenvolvido por Victor Vieira** 🚀