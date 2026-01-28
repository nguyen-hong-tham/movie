import React from 'react'
import { SectionHeader } from './SectionHeader'

export const DemoPage = () => {
    const [number, setNumber] = React.useState(0)

    return (
        <div>
            <SectionHeader
                title="abc"
                onClick={() => {
                    console.log('clicked')
                }}
                onLogger={(message) => {
                    console.log('logger message:', message)
                }}
            />
            <div className="my-5 text-3xl">Number: {number}</div>
            <button
                className="border-amber-300 border p-3"
                onClick={() => {
                    setNumber(10)
                }}
            >
                + Number
            </button>
        </div>
    )
}
