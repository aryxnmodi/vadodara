import React,{useReducer, useEffect} from "react";

const initialState = {
    data: null,
    loading: true,
    error: null,
};

const dataReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return {
                data: action.payload,
                loading: false,
                error: null,
            };
        case "FETCH_ERROR":
            return {
                data: null,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

const DataFetchingComponent = () => {
    const [state, dispatch] = useReducer(dataReducer, initialState);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1/posts")
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: "FETCH_SUCCESS", payload: data });
            })
            .catch((error) => {
                dispatch({ type: "FETCH_ERROR", payload: error.message });
            });
    }, []);

    return (
        <div>
            {state.loading ? (
                <p>Loading...</p>
            ) : state.error ? (
                <p>{state.error}</p>
            ) : (
                <ul>
                    {state.data.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};
export default function App() {
    return (
            <DataFetchingComponent />
    );
}