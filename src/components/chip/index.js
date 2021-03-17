import Chip from "@material-ui/core/Chip";


export function RegressionChip() {
    return (
        <Chip size="small" label="Regression" color="secondary"/>
    );
}

export function ClassificationChip() {
    return (
        <Chip size="small" label="Classification" color="primary"/>
    );
}