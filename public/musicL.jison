%{
	var rhythm;
%}

%token //Palabras reservadas (?)

//Precedencia:
%right BARRA
%left DOBLE_BARRA

%start partitura

%% /* Lenguaje */
partitura
    : CLAVE ARMADURA guardar_ritmo compases EOF
	  {
	  	return [{clave: $1, armadura: $2, ritmo: $3}];
	  }
    ;

guardar_ritmo
    : RITMO
	{
		rhythm = $1;
		$$ = $1;
	}
    ;

compases
    : compas DOBLE_BARRA
	{
		$$ = $1;
	}
     | compas BARRA compases
	{
		
		if($1) $$ = [$1];
		
		if($3) $$ = $$.concat($4);

	}
     ;
compas 
	: notas
	{
		$$ = [{type: “Compas”, notas: $1}]
	}
	;

notas
	: nota notas
	{
		if($2) $$ = $$.concat($2); 
	}
	| /*vacio */
	{
		$$ = [];
	}
	;

nota
: NOM_NOTA figura
{
	$$ = [{type: nota, nombre: $1, figura: $2}];
}
;

figura 
        	: REDONDA 
	{
		$$ = [{nombre: “Redonda”, valor: $1}];
	}
	| BLANCA
	{
		$$ = [{nombre: “Blanca”, valor: $1}];
	}
	| NEGRA
	{
		$$ = [{nombre: “Negra”, valor $1}];
	}
	;
