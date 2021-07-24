import {withRouter} from 'react-router-dom'

function Profile(props) {
    return (
        <div>
            <h1>
                {
                    <h1>This is the profile of id {props.match.params.profileid }</h1>

                }
            </h1>

        </div>
    )
}

export default withRouter(Profile)
