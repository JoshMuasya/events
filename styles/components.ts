import { CSSProperties } from 'react';
import { COLORS } from './themes';

export const styles = {
    mainWrapper: {
        backgroundImage: 'url("/services.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
        minHeight: '100%',
        position: 'relative',
    } as CSSProperties,

    overlay: {
        position: 'absolute',
        inset: 0,
        backgroundColor: COLORS.purpleOverlay,
        backdropFilter: 'blur(8px)',
    } as CSSProperties,

    pageContainer: {
        display: "flex",
        position: "relative",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        paddingTop: "40px",
        zIndex: 1,
    } as CSSProperties,

    stickyContainer: {
        position: "sticky",
        top: "40px",
        left: 0,
        width: "400px",
        height: "fit-content",
    } as CSSProperties,

    stickyTitle: {
        fontSize: "48px",
        fontWeight: "bold",
        margin: 0,
        color: "#FFD700", // Golden title
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        fontFamily: "'Playfair Display', serif",
    } as CSSProperties,

    cardsContainer: {
        flex: 1,
        paddingLeft: "40px",
        maxWidth: "500px",
        marginLeft: "auto",
        paddingBottom: "100px",
    } as CSSProperties,

    cardContainer: {
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        paddingTop: 20,
        marginBottom: -40,
    } as CSSProperties,

    splash: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
    } as CSSProperties,

    card: {
        fontSize: 64,
        width: 300,
        height: 430,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: 20,
        background: "rgba(189, 142, 64, 0.2)", // Semi-transparent golden background
        boxShadow: "0 8px 64px 0 rgba(31, 38, 135, 0.7)",
        transformOrigin: "10% 60%",
        padding: "2rem",
        color: "white",
        cursor: "pointer",
        textDecoration: "none",
        backdropFilter: 'blur(2px)',
        border: "1px solid rgba(255, 255, 255, 0.1)",
    } as CSSProperties,

    icon: {
        fontSize: 84,
        marginBottom: "1rem",
    } as CSSProperties,

    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: "1rem",
        textAlign: "center",
        color: "#FFD700", // Golden text
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Adds a slight shadow for contrast
    } as CSSProperties,

    description: {
        fontSize: 16,
        textAlign: "center",
        lineHeight: 1.5,
        color: "#FFD700", // Golden text
        textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)", // Adds subtle shadow for readability
    } as CSSProperties,

} as const;