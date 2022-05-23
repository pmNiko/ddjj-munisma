import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { ItemContent, ItemHeader } from './customComponentStyle'

type Item = {
    title: string
    content: string
}

interface Props {
    titles?: string[]
    contents: string[]
}

export const ItemList = ({ titles, contents }: Props) => {
    const [dataLoad, setDataLoad] = useState<Item[]>([])
    let data: Item[] = []

    useEffect(() => {
        if (data.length === 0 && contents.length > 0) {
            let titleParam: string
            for (let i = 0; i < contents.length; i++) {
                titleParam = titles ? titles[i] : ''
                data.push({ title: titleParam, content: contents[i] })
            }
            setDataLoad(data)
        }
    }, [titles])

    return (
        <>
            {true ? (
                dataLoad.map(({ title, content }: Item) => (
                    <div key={title + content} style={{ marginTop: '0.5px' }}>
                        <ItemHeader>
                            <Typography variant="subtitle2"> {title} </Typography>
                        </ItemHeader>
                        <ItemContent>
                            <Typography variant="subtitle1"> {content} </Typography>
                        </ItemContent>
                    </div>
                ))
            ) : (
                <h4>No hay items que mostrar... </h4>
            )}
        </>
    )
}
