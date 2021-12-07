import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div className="not-found">
            <div className="oops-message">
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/878065c3-f144-4f02-a6b6-4d399c75cf05/d6ui7mn-eee7fa61-c137-4a1a-b9da-329058fb01d5.jpg/v1/fill/w_1024,h_902,q_75,strp/sad_snowman_by_shapeshiftinggoldfsh_d6ui7mn-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAyIiwicGF0aCI6IlwvZlwvODc4MDY1YzMtZjE0NC00ZjAyLWE2YjYtNGQzOTljNzVjZjA1XC9kNnVpN21uLWVlZTdmYTYxLWMxMzctNGExYS1iOWRhLTMyOTA1OGZiMDFkNS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.swYFlxEXf-o1AKvwSConXODeIyobGKJWteShmfrIQ64" alt="not found"/>
                <div>
                    <h1>Oops, something went wrong!</h1>
                    <br />
                    <Link to="/" className="home-btn">Go Home</Link>
                </div>
            </div>
        </div>
    );
}


export default NotFound;