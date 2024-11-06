export default {
    props: {
        id: String,
        icon: String,
        theme: String,
        title: String,
        description: String,
        url: String
    },
    setup(props) {
        return {props}
    },
    template: `
        <div :class="'card-wrap card-theme-' + props.theme">
            <div class="card-header">
                <i :class=props.icon></i>
            </div>
            <div class="card-content">
                <h1 class="card-title">{{props.title}}</h1>
                <p class="card-text">{{props.description}}</p>
                <a class="card-btn" :href=props.url target="_blank">Voir</a>
            </div>
        </div>
    `,
}