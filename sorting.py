import pandas as pd


def main():
    df = pd.read_csv("scenario_data.csv")

    df2 = df[["Time (Sec.)", "Temperature"]]

    print(df2)

    df2.to_csv('tem.csv', index=False)

if __name__ == '__main__':
    main()
