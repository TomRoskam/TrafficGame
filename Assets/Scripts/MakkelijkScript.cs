using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class MakkelijkScript : MonoBehaviour
{
    public static float MakkelijkPunten = 100;
    public static bool MakkelijkClicked = false;

    public void MakkelijkButtonClicked()
    {
        SceneManager.LoadScene(1);
        MakkelijkClicked = true;
    }

    public void Update()
    {
        Debug.Log(MakkelijkPunten);
    }
}
