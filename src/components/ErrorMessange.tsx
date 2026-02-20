/* 
Componente de messagem de erro
Exibe erros com opção de dispensar
*/

import React from 'react';
import ( View, Text, TouchableOpacity, StyleSheet ) from 'react-native';
import type { ErrorMessangeProps } from '../types/indes';



function ErrorMessangeProps( {error,onDismiss} :
ErrorMessangeProps & {onDismiss?: () => void }) {
    //Não renderiza nada se não houver erro
    if(!error) return null;
}
