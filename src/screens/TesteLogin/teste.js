import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

export const Teste = () => {
    const items = [
        {
          id: 0,
          name: 'Cobol'
        },
        {
          id: 1,
          name: 'JavaScript'
        },
        {
          id: 2,
          name: 'Basic'
        },
        {
          id: 3,
          name: 'PHP'
        },
        {
          id: 4,
          name: 'Java'
        }
      ]
    
      return (
        <div className="App">
            <div style={{ width: 400 }}>
              <ReactSearchAutocomplete
                items={items}
              />
            </div>
        </div>
      )
    }