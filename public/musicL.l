/* lexical grammar */
%{
	var reserved_words ={ REDONDA: 'REDONDA', BLANCA: 'BLANCA', NEGRA: 'NEGRA', DOBLE_BARRA: 'DOBLE_BARRA', BARRA: 'BARRA' }
%}
%%

\s+                         /* skip whitespace and comments */
('||') return 'DOBLE_BARRA'
('|') return 'BARRA'
(A|B|C|D|E|F|G)  return 'NOM_NOTA'
(\$)	return 'SILENCIO'
(\#|b) return 'ALTERACION'
(SOL|FA) return 'CLAVE'
(2\/4|3\/4|4\/4) return 'RITMO'
([0-7]\#|[0-7]b|0) return 'ARMADURA'
(1) return 'REDONDA'
(2) return 'BLANCA'
(4) return 'NEGRA'
<<EOF>>                          return 'EOF'
.                                return 'INVALID'

