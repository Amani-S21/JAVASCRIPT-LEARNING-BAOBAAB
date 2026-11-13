export function calculerMoyenne(apprenants){
    if (apprenants.length === 0){
        return 0;
    }

    const somme = apprenants.reduce(
        (total, apprenant) => total + apprenant.note, 0
    );

    return somme / apprenants.length;
}

export function compterApprenants(apprenants){
    return apprenants.length;
}