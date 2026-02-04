import React from 'react';
import campanaClick from '../../images/campanas/PrimeraCampañaSeguridad.png';
import campanaContrasenas from '../../images/campanas/Seguridad Mercafarma Contraseñas.png';

const ReglasSeguridad = (props) => {
    return (
        <section className="wpo-blog-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-8 col-12 mx-auto ${props.blRight}`}>
                        <div className="wpo-blog-content">
                            <div className="post format-standard-image">
                                <div style={styles.hero}>
                                    <span style={styles.kicker}>Campañas internas de seguridad</span>
                                    <h1 style={styles.heroTitle}>Seguridad Digital para Colaboradores Mercafarma</h1>
                                    <p style={styles.heroSubtitle}>Buenas prácticas claras y fáciles de aplicar para proteger la información de todos.</p>
                                </div>

                                <div style={styles.card}>
                                    <div style={styles.cardHeader}>
                                        <span style={styles.badge} aria-hidden="true">🔐</span>
                                        <h2 style={styles.cardTitle}>CUIDADO DE CONTRASEÑAS – SEGURIDAD MERCAFARMA</h2>
                                    </div>
                                    <img
                                        src={campanaContrasenas}
                                        alt="Campaña de contraseñas Mercafarma"
                                        style={styles.campaignImage}
                                    />
                                    <p style={styles.cardIntro}>
                                        Tus contraseñas son personales e intransferibles. No las compartas ni las ingreses en equipos desconocidos,
                                        ya que podrías poner en riesgo tu información y la de MERCAFARMA. Usa contraseñas seguras, cámbialas
                                        periódicamente y evita computadoras públicas. Proteger tus accesos es proteger a todos.
                                    </p>
                                    <p style={styles.cardIntro}>
                                        Una contraseña fuerte reduce el riesgo de accesos no autorizados y ayuda a mantener la continuidad de las
                                        operaciones. Tu acceso es tu responsabilidad: cuídalo como cuidas tus llaves de casa.
                                    </p>
                                    <ul style={styles.bullets}>
                                        <li>Usa contraseñas de al menos 12–14 caracteres.</li>
                                        <li>Prefiere frases de contraseña (passphrases) con palabras y signos, por ejemplo un formato como “UnaFraseLargaConSignos!”.</li>
                                        <li>No reutilices contraseñas entre sistemas.</li>
                                        <li>Utiliza un gestor de contraseñas confiable (sin necesidad de uno específico).</li>
                                        <li>Atento a señales de compromiso: avisos de “inicio de sesión desde otro lugar” o códigos que no solicitaste.</li>
                                        <li>Si crees que tu contraseña fue expuesta, cámbiala de inmediato y repórtalo.</li>
                                        <li>Evita guardar contraseñas en notas visibles o compartirlas por chat.</li>
                                        <li>Si una web te pide tu contraseña por correo o mensaje, desconfía y verifica primero.</li>
                                    </ul>
                                    <div style={styles.callout}>
                                        <strong style={styles.calloutTitle}>Qué hacer si sospechas algo</strong>
                                        <p style={styles.calloutText}>
                                            Comunícate con el Departamento de Sistemas.
                                            También puedes llamar al <span style={styles.inlineStrong}>+502 3990 9400</span> si lo consideras necesario.
                                        </p>
                                    </div>
                                </div>

                                <div style={styles.separator} />

                                <div style={styles.card}>
                                    <div style={styles.cardHeader}>
                                        <span style={styles.badge} aria-hidden="true">⚠️</span>
                                        <h2 style={styles.cardTitle}>#CuidadoConElClick</h2>
                                    </div>
                                    <img
                                        src={campanaClick}
                                        alt="Campaña Cuidado con el Click"
                                        style={styles.campaignImage}
                                    />
                                    <p style={styles.cardIntro}>
                                        Antes de abrir un archivo o enlace, piensa dos veces. Si no reconoces al remitente o el mensaje parece
                                        sospechoso… ¡No lo abras! Protege tu información y la de todos en MERCAFARMA.
                                    </p>
                                    <p style={styles.cardIntro}>
                                        Muchos incidentes comienzan con un solo clic. La prevención es simple: verifica y confirma antes de abrir,
                                        incluso si el mensaje parece urgente o viene de alguien conocido.
                                    </p>
                                    <ul style={styles.bullets}>
                                        <li>Revisa el remitente y el contexto del mensaje antes de abrir adjuntos.</li>
                                        <li>Si el asunto es inusual o tiene urgencia exagerada, toma precauciones.</li>
                                        <li>Evita descargar archivos con extensiones desconocidas o inesperadas.</li>
                                        <li>Confirma por otro medio si la solicitud es sensible o fuera de lo normal.</li>
                                    </ul>
                                    <div style={styles.callout}>
                                        <strong style={styles.calloutTitle}>Qué hacer si sospechas algo</strong>
                                        <p style={styles.calloutText}>
                                            No abras el enlace ni descargues archivos. Informa al equipo de Sistemas.
                                            Si es necesario, también puedes comunicarte al <span style={styles.inlineStrong}>+502 3990 9400</span>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    hero: {
        marginBottom: '24px',
        textAlign: 'center',
    },
    kicker: {
        display: 'inline-block',
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        fontSize: '12px',
        fontWeight: '700',
        color: '#f2f2f2',
        background: 'rgba(255,255,255,0.12)',
        padding: '6px 10px',
        borderRadius: '999px',
        marginBottom: '12px',
    },
    heroTitle: {
        fontSize: '30px',
        fontWeight: '800',
        color: 'white',
        marginBottom: '10px',
        lineHeight: '1.2',
    },
    heroSubtitle: {
        fontSize: '18px',
        color: 'rgba(255,255,255,0.9)',
        lineHeight: '1.6',
        marginBottom: '0',
        textAlign: 'center',
    },
    card: {
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: '16px',
        padding: '22px',
        marginBottom: '24px',
        textAlign: 'center',
    },
    cardHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '10px',
        justifyContent: 'center',
    },
    badge: {
        width: '40px',
        height: '40px',
        borderRadius: '12px',
        background: 'rgba(255,255,255,0.16)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
    },
    cardTitle: {
        fontSize: '22px',
        fontWeight: '700',
        color: 'white',
        margin: '0',
        lineHeight: '1.3',
    },
    cardIntro: {
        fontSize: '16px',
        color: 'rgba(255,255,255,0.92)',
        lineHeight: '1.7',
        marginBottom: '14px',
        textAlign: 'center',
    },
    bullets: {
        marginTop: '0',
        marginBottom: '16px',
        paddingLeft: '0',
        listStylePosition: 'inside',
        color: 'white',
        lineHeight: '1.7',
        fontSize: '15px',
        textAlign: 'center',
    },
    callout: {
        background: 'rgba(255,255,255,0.12)',
        borderRadius: '12px',
        padding: '14px 16px',
        textAlign: 'center',
    },
    calloutTitle: {
        display: 'block',
        color: 'white',
        fontSize: '15px',
        marginBottom: '6px',
    },
    calloutText: {
        margin: '0',
        color: 'rgba(255,255,255,0.92)',
        lineHeight: '1.6',
        fontSize: '14px',
    },
    inlineStrong: {
        fontWeight: '700',
        color: 'white',
    },
    separator: {
        height: '1px',
        background: 'rgba(255,255,255,0.15)',
        margin: '8px 0 24px',
    },
    campaignImage: {
        width: '86%',
        height: 'auto',
        display: 'block',
        borderRadius: '12px',
        boxShadow: '0 8px 18px rgba(0,0,0,0.2)',
        margin: '12px 0 16px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
};

export default ReglasSeguridad;
