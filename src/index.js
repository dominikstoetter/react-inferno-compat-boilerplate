import React from 'react'
import { render } from 'react-dom'
import ReponsiveGrid from '../lib/components/responsive-grid'

const View = () => <ReponsiveGrid>test</ReponsiveGrid>

render(<View />, document.getElementById('root'))
