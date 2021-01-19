import { QueryBuilder } from 'knex';
import { DBUnknownFieldMapping } from '../core/errors';

/**
 * Diese Funktion stellt für die übergebene knex-Abfrage die Limits und Sortierung ein.
 * @param {Knex.QueryBuilder} knexQuery - knex-Abfrage
 * @param {number} limit - Die Anzahl der zurückzugebenden Zeilen
 * @param {number} offset - Gibt die Anzahl der Zeilen an, die übersprungen werden soll
 * @param {string} sort - Komma seaparierte Liste mit Spaltennamen, nach denen sortiert werden soll
 * @param {Object[]} fieldMappings - Eine Auflistung der zugelassenen Feldnamen
 * @param {string} fieldMappings[].objectName - Object-Feldname
 * @param {string} fieldMappings[].fieldName - SQL-Feldname
 */
// eslint-disable-next-line import/prefer-default-export
export function addQuerySortAndLimits(
  knexQuery: QueryBuilder<any, any>,
  limit?: number | null,
  offset?: number | null,
  sort?: string | null,
  fieldMappings?: Array<{ objectName: string, fieldName: string }>,
) {
  if (limit) {
    knexQuery.limit(limit);
  }
  if (offset) {
    knexQuery.offset(offset);
  }
  if (sort) {
    knexQuery.orderBy(
      sort.split(',')
        .map((field) => {
          const orderField: { column: string; order?: 'asc' | 'desc' | undefined } = { column: field };

          switch (field.charAt(0)) {
            case '-':
              orderField.column = field.substring(1);
              orderField.order = 'desc';
              break;
            case '+':
              orderField.column = field.substring(1);
              orderField.order = 'asc';
              break;
            default:
          }

          if (fieldMappings) {
            const fieldMapping = fieldMappings.find((f) => f.objectName === orderField.column);

            // Prüfen, ob der Feldname bekannt wird
            if (fieldMapping) {
              // Objektnamen durch SQL-Namen ersetzen
              orderField.column = fieldMapping.fieldName;
            } else {
              const error = new DBUnknownFieldMapping(`Der Feldname '${orderField.column}' ist nicht bekannt`);
              throw error;
            }
          }

          return orderField;
        }),
    );
  }
}
