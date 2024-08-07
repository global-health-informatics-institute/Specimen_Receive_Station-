import mysql.connector
from mysql.connector import Error
import logging

# Configure logging
logging.basicConfig(filename='/home/kumbu/Desktop/8/manda.branch/manda.srs/Specimen_Receive_Station-/logs/database_operations.log', level=logging.INFO,
                    format='%(asctime)s %(levelname)s:%(message)s')

try:
    # Connect to the MySQL database
    connection = mysql.connector.connect(
        host="127.0.0.1",
        port="3306",
        user="root",
        password="root",
        database="Haematology"
    )

    if connection.is_connected():
        cursor = connection.cursor()

        # Update all fields in the weekly_summary table to 0 where id = 1
        update_query = """
        UPDATE monthly_summary
        SET monthly_registered = 0, monthly_received = 0, monthly_progress = 0, monthly_pending = 0, monthly_complete = 0
        WHERE id = 1;
        """

        cursor.execute(update_query)
        connection.commit()
        logging.info("monthly summary updated successfully")

except Error as e:
    logging.error(f"Error: {e}")
finally:
    if connection.is_connected():
        cursor.close()
        connection.close()
        logging.info("MySQL connection is closed")
