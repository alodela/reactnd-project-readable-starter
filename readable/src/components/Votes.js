import React from 'react'
import { Button } from 'reactstrap'
import { IoThumbsdown, IoThumbsup } from 'react-icons/lib/io'

const Votes = props => {
    const { voteScore, onVoteUp, onVoteDown } = props
    const voteClass = voteScore >= 0 ? 'text-success' : 'text-danger'

    return (
        <div>
            <Button color="link" size="sm" className="py-0" onClick={onVoteUp}><IoThumbsup color="green"/></Button>
            <small className={voteClass}>{Math.abs(voteScore)}</small>
            <Button color="link" size="sm" className="py-0" onClick={onVoteDown}><IoThumbsdown color="red"/></Button>
        </div>
    )
}

Votes.defaultProps = {
    voteScore: 0,
}

export default Votes