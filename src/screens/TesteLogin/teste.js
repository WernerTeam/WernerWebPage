import Search from 'react-search'
import React from 'react'

export const Teste =() => {

  function HiItems(items) {
    console.log(items)
  }

    let items = [
      { id: 0, value: 'ruby' },
      { id: 1, value: 'javascript' },
      { id: 2, value: 'lua' },
      { id: 3, value: 'go' },
      { id: 4, value: 'julia' }
    ]

    return (
      <div>
        <Search items={items} />

        <Search items={items}
                placeholder='Selecionar clientes'
                maxSelected={1}
                multiple={false}
                // onItemsChanged={HiItems.bind(this)} 
                />
      </div>
    )
  }