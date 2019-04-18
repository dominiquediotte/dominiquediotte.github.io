function addToolTip() {
    var checkmark = document.getElementsByClassName("checkmark");
    var crossmark = document.getElementsByClassName("crossmark");
    var warningsign = document.getElementsByClassName("warningsign");
    
    for (i = 0; i < checkmark.length; i++) {
        checkmark[i].title = "Ce produit peut être consommé sans danger";
    }

    for (i = 0; i < crossmark.length; i++) {
        crossmark[i].title = "Ce produit n'est pas comestible et il peut être nocif pour la santé";
    }

    for (i = 0; i < warningsign.length; i++) {
        warningsign[i].title = "Ce produit est comestible en tenant compte des mises en garde";
    }
}
