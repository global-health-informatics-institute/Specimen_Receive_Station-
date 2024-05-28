import sqlite3

class SummaryData:
    def __init__(self):
        self.connection = sqlite3.connect('models/intermediateDB.db')
        self.cursor = self.connection.cursor()

    def getSummaryRegistered(self):
        """Get the total count of tests with status 'registered'."""
        query = 'SELECT COUNT(id) AS totalStatus FROM tests WHERE LOWER(test_status) = "registered";'
        self.cursor.execute(query)
        result = self.cursor.fetchone()
        total_status = result[0] if result else 0
        return total_status

    def getSummaryReceived(self):
        """Get the total count of tests with status 'received'."""
        query = 'SELECT COUNT(id) AS totalStatus FROM tests WHERE LOWER(test_status) = "received";'
        self.cursor.execute(query)
        result = self.cursor.fetchone()
        total_status = result[0] if result else 0
        return total_status

    def getSummaryInprogress(self):
        """Get the total count of tests with status 'in_progress'."""
        query = 'SELECT COUNT(id) AS totalStatus FROM tests WHERE LOWER(test_status) = "in_progress";'
        self.cursor.execute(query)
        result = self.cursor.fetchone()
        total_status = result[0] if result else 0
        return total_status

    def getSummaryPendingAuth(self):
        """Get the total count of tests with status 'pending_auth'."""
        query = 'SELECT COUNT(id) AS totalStatus FROM tests WHERE LOWER(test_status) = "pending_auth";'
        self.cursor.execute(query)
        result = self.cursor.fetchone()
        total_status = result[0] if result else 0
        return total_status

    def getSummaryComplete(self):
        """Get the total count of tests with status 'complete'."""
        query = 'SELECT COUNT(id) AS totalStatus FROM tests WHERE LOWER(test_status) = "complete";'
        self.cursor.execute(query)
        result = self.cursor.fetchone()
        total_status = result[0] if result else 0
        return total_status

    def closeConn(self):
        """Close the database connection."""
        self.cursor.close()
        self.connection.close()

# # Example usage:
# summary_data = SummaryData()
# print(f"Registered: {summary_data.getSummaryRegistered()}")
# print(f"Received: {summary_data.getSummaryReceived()}")
# print(f"In Progress: {summary_data.getSummaryInprogress()}")
# print(f"Pending Auth: {summary_data.getSummaryPendingAuth()}")
# print(f"Complete: {summary_data.getSummaryComplete()}")
# summary_data.closeConn()
