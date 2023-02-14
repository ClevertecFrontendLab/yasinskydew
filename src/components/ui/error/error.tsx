import {FC} from "react";

interface ErrorProps {
    error: string;
}
const Error: FC<ErrorProps> = ({ error }) => {
    return (
        <div data-test-id='error'>
            <h3>{error}</h3>
        </div>
    );
};

export default Error;
