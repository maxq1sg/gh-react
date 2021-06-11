import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    container: {
        backgroundColor: (props) => props.color,
        fontSize: "50px"
    }
})

export default useStyle