import { useStyles } from '../Header/HeaderStyle'

export default function Footer() {

    const classes = useStyles()
    return (
        // <div className={classes.navbar} style={{ position: 'fixed', bottom: 0,width:'100%' }}>
        //     Made With<span style={{ color: 'red' }}>❤</span>Ali
        // </div>

        <footer style={{ position: "fixed", bottom: 0, width: '100%', backgroundColor: "#333",zIndex:'999' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <span style={{ color: "white" }}>Made With <span style={{ color: 'red' }}>❤</span> Ali
                </span>
            </div>
        </footer>
    )
}