---
title: Guia de Colaboração – Projeto Notes
tags: [colaboradores, guia, templates, obsidian, git]
---





# Guia de Colaboração para a pesquisa
(lembre-se de pedir o link de colaborador no git hub ao rick)
Este documento ensina como **participar, criar notas e contribuir** para o projeto usando **Obsidian +  Git**, com sincronização automática e padronização via templates.
Todas as alterações são sincronizadas sem necessidade de branchs ou Pull Requests.
## 1. Preparação Inicial
### 1.1 Clonar o repositório

Repositório do projeto:  
[https://github.com/RicardoS2/notes](https://github.com/RicardoS2/notes)

No terminal:

```bash
git clone https://github.com/RicardoS2/notes
````

Isso cria uma cópia local do Vault no seu computador.


### 1.2 Abrir no Obsidian

- Abra o Obsidian.
- Clique em **Open Folder as Vault**.
- Selecione a pasta `notes` que você clonou.
---
## 2. Configuração do Obsidian Git

1. Instale o plugin **Obsidian Git**.
2. Configure os parâmetros:
- Repository URL: `https://github.com/RicardoS2/notes`
- Branch: `main`
- Auto Pull on Startup: ativado
- Auto Commit & Push: ativado
- Sync Interval: 5–10 minutos
- Commit message padrão: `"Atualização automática do Vault"`
Com isso, todas as alterações serão sincronizadas automaticamente.
---
## 3. Estrutura do Vault

```
notes/
├─ pastas/subpastas de assuntos
├─ assets/          ← PDFs, imagens, arquivos de apoio
├─ Templates/       ← Modelos de notas
└─ .obsidian/
    └─ plugins/
```

- **Templates:** usados para criar notas novas padronizadas.
- **Assets:** PDFs ou imagens que podem ser referenciados nas notas.

---
## 4. Usando Templates

### 4.1 Criar nova nota

1. Abra o plugin **Templates**.
2. Configure a pasta de templates: `Templates/`.
3. Crie uma nota nova e insira o template (atalho: Ctrl+T ou menu do plugin).
### 4.2 Exemplo de template (`Templates/Nova Nota.md`)

```markdown
---
tags: [template, colaboracao]
---

# Título da Nota

> [!TIP] Dica
> Preencha com informações relevantes.

## Objetivo
Descreva o objetivo desta nota.

## Detalhes
Adicione links internos, PDFs ou imagens.

## Referências
- [[Outra Nota]]
- ![[assets/pdfs/exemplo.pdf]]
```

- Use **callouts** para observações importantes ou alertas.
- Use **wikilinks** `[[nome da nota]]` para referência interna.
- Use **embeds** `![[arquivo.pdf]]` para PDFs ou imagens.
--
## 5. Editando Notas Existentes

- Abra qualquer nota dentro da pasta
- Faça alterações normalmente, e se caso for de outro autor use a termologia `et al` + seu nome ao onde houver alteração 
- O plugin Git fará **commit e push automático** depois de um tempo, caso não, aperta ctrl+P e seguida os passos:
  - git commit
  - git push
### 5.1 Boas práticas
- Não edite a mesma nota simultaneamente com outro colaborador.
- Use callouts para sugestões ou observações:
```markdown
> [!INFO] Sugestão
> Adicione uma seção de resumo no final desta nota.
```

---
## 6. Adicionando PDFs e Imagens
- Coloque arquivos na pasta `assets/`.
- Para usar dentro das notas:
```markdown
![[assets/pdfs/manual.pdf]]           ← embed inline
[Download PDF](assets/pdfs/manual.pdf) ← link para download
![[assets/imagens/grafico.png]]       ← imagem embutida
```
- Mantém a estrutura organizada e acessível a todos.

---
## 7. Sincronização Automática

- Ao abrir o Obsidian → Auto Pull executado.
- Ao salvar alterações → Auto Commit & Push executado.
- Todos os membros receberão alterações automaticamente na próxima sincronização.

> Não é necessário criar branchs, Pull Requests ou enviar arquivos manualmente.

---
## 8. Links e Seções Específicas
- Para criar links internos: `[[Outra Nota]]`.
- Para linkar uma seção específica: `[[Outra Nota#Seção]]`.
- Para PDFs ou imagens: `![[assets/pdfs/exemplo.pdf]]`.
Use sempre **wikilinks** para manter consistência e evitar erros.
---
## 9. Resumo do Fluxo de Colaboração
1. Clonar o repositório.
2. Abrir o Vault no Obsidian.
3. Configurar Obsidian Git (Auto Pull & Push).
4. Criar notas usando templates.
5. Editar notas existentes.
6. Salvar → alterações sincronizadas automaticamente.
7. Outros membros recebem alterações automaticamente.
---
## 10. Recomendações Finais

- Sempre use templates para criar novas notas.
- Use **tags** e **callouts** para organizar conteúdo.
- Evite renomear arquivos existentes.
- Adicione PDFs e imagens apenas na pasta `assets/`.
- Siga a estrutura do Vault para manter o projeto organizado.
---