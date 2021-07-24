import {withRouter} from 'react-router-dom'

function Request(props) {
    return (
        <div>
                {
                    props.match == null? <h1></h1>:
                    <h1>This is the request of id {props.match.params.requestid}</h1>
                }

        </div>
    )
}

export default withRouter(Request)
