using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Position : MonoBehaviour
{

    [SerializeField]
    private Transform ScoreTextTransform;
    // Start is called before the first frame update
    void Start()
    {
        ScoreTextTransform.position = ScoreTextTransform.InverseTransformPoint(ScoreTextTransform.position + new Vector3(Screen.width - 20, 75, 50));
    }
}
