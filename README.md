# Aplicativo de Reordenamento com Framer Motion

Este aplicativo demonstra como criar efeitos de arrastar para reordenar itens usando o conjunto simples de componentes fornecidos pelo Framer Motion.

## Reordenar

Os componentes Reorder podem ser usados para criar listas de arrastar para reordenar, como guias reordenáveis ou itens de tarefas pendentes.

```javascript
import { Reorder } from "framer-motion"
import { useState } from "react"

function List() {
  const [items, setItems] = useState([0, 1, 2, 3])
  
  return (
    <Reorder.Group axis="y" values={items} onReorder={setItems}>
      {items.map((item) => (
        <Reorder.Item key={item} value={item}>
          {item}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  )
}
```

## Uso

Cada lista reordenável é encapsulada no componente `Reorder.Group`.

Por padrão, isso é renderizado como `<ul>`, mas pode ser alterado com a propriedade `as`.

```javascript
<Reorder.Group as="ol">
```

`Reorder.Group` deve ser passado o array de valores em sua lista reordenável por meio da propriedade `values`.

```javascript
const [items, setItems] = useState([0, 1, 2, 3])

return (
  <Reorder.Group values={items} onReorder={setItems}>
    {/* Itens renderizados aqui */}
  </Reorder.Group>
)
```

Para renderizar cada item reordenável, use `Reorder.Item`, passando o valor que ele representa por meio da propriedade `value`.

```javascript
{items.map(item => (
  <Reorder.Item key={item} value={item}>
    {item}
  </Reorder.Item>
))}
```

Agora, quando os itens forem arrastados, `onReorder` irá disparar com uma nova ordem.

## Instruções para Visualização

Para visualizar este aplicativo localmente, siga estas etapas:

1. Clone este repositório em sua máquina local usando o seguinte comando:
   ```
   git clone git@github.com:rodolphoreis/frame-motion.git
   ```

2. Navegue até o diretório do projeto:
   ```
   cd framer-motion
   ```

3. Instale as dependências do projeto usando npm ou yarn:
   ```
   npm install
   ```
   ou
   ```
   yarn install
   ```

4. Após a instalação das dependências, inicie o servidor de desenvolvimento usando o seguinte comando:
   ```
   npm start
   ```
   ou
   ```
   yarn start
   ```

5. O aplicativo estará disponível em seu navegador no endereço `http://localhost:3000`.

Agora você pode explorar e interagir com o aplicativo localmente!

---

