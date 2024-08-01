# Deployement
- activate environment,
  - python3 -m venv pwd/.venv
  - source pwd/.venv/bin/activate

- install dependencies
  - pip install -r requirements.txt

**config.py**:
- Stand alone to app.py
- Contains app configurations and should be redefined manually

**dbsetup**:
- first to be run... defines the schema for the sqlite and SQL
- every data functions is defined in a nameCorresponding model file

**tatCurrent


**

# UpdateEntries (oka)
- **iblis_connection**: from line 15-20, need external configurations
- **srs_connection**: from line 25 - 29, need further configarations
- will be called using `curl` 
- configure the authentication method used by the iBlis LIMS systems 


# INSTRUCTIONS
- config the database end points in `models/config`
- config test type as short names for that screen`models/config`
- load the file (alone) `models/setUp`
- set up two cron jobs that log into `logs/clearTables.log`
    - one that clears weeklySummary and another monthlySummary
______________


# monthlyEraser run every first day of the month at the very beginning of the day 00:01
- 1 0 1 * * /home/kumbu/Desktop/8/manda.branch/manda.srs/Specimen_Receive_Station-/venv/bin/python /home/kumbu/Desktop/8/manda.branch/manda.srs/Specimen_Receive_Station-/models/monthlyEraser.py >> /home/kumbu/Desktop/8/manda.branch/manda.srs/Specimen_Receive_Station-/logs/monthlyEraser.log 2>&1

# weeklyEraser run every first day of the week at the very beginning of the day 00:01
- 1 0 * * 0 /home/kumbu/Desktop/8/manda.branch/manda.srs/Specimen_Receive_Station-/venv/bin/python /home/kumbu/Desktop/8/manda.branch/manda.srs/Specimen_Receive_Station-/models/weeklyEraser.py >> /home/kumbu/Desktop/8/manda.branch/manda.srs/Specimen_Receive_Station-/logs/weeklyEraser.log 2>&1

- Other materials
  - `iBlissLaravel.md` && `iBlisReception.md`
  -  '[Click for extra Docs](git@github.com:89Tain/eightMarkdown.git)'