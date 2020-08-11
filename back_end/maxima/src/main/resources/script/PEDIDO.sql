CREATE OR REPLACE FUNCTION addColumn()
RETURNS VOID AS
$BODY$
BEGIN
IF NOT EXISTS (SELECT 1 FROM information_schema.columns
WHERE table_name= 'pedido') THEN
CREATE TABLE PUBLIC.pedido(
id serial   NOT NULL,
VLR_TOTAL numeric(12,2) NOT NULL,
QTD_ITENS int NOT NULL,
VLR_FRETE numeric(12,2),
CONSTRAINT pedido_pkey PRIMARY KEY (id)
)
WITH
(
oids = false
);
RAISE NOTICE 'Tabela pedido criada' ;
ELSE
RAISE NOTICE 'Tabela pedido ja existe' ;
END IF;
END;
-- fim bloco principal
$BODY$
LANGUAGE plpgsql VOLATILE
COST 100;
ALTER FUNCTION addColumn() OWNER TO postgres;
SELECT addColumn();
DROP FUNCTION addColumn();